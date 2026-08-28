import { getDashboardStats } from "@/lib/analytics/stats";

export const dynamic = "force-dynamic"; // always fetch fresh stats, never cache this page

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-[#0d1e3d]/10 rounded-lg px-5 py-4">
      <div className="text-xs uppercase tracking-widest text-[#0d1e3d]/40">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}

function RankedList({ title, items, unit }: { title: string; items: { key: string; count: number }[]; unit: string }) {
  const max = Math.max(1, ...items.map((i) => i.count));
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-4">
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-[#0d1e3d]/40">No data yet.</p>
      ) : (
        <div className="space-y-2.5">
          {items.map((item) => (
            <div key={item.key} className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="truncate max-w-[70%] text-[#0d1e3d]/80">{item.key}</span>
                <span className="text-[#0d1e3d]/50">
                  {item.count} {unit}
                </span>
              </div>
              <div className="h-1.5 bg-[#0d1e3d]/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0d1e3d]/30 rounded-full"
                  style={{ width: `${(item.count / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function AnalyticsDashboard() {
  const stats = await getDashboardStats();
  const today = stats.dailySeries[0];
  const uniquesLast7 = stats.dailySeries.reduce((sum, d) => sum + d.uniqueVisitors, 0);

  return (
    <div className="min-h-screen px-6 py-16 selection:bg-[#e0f2fe] selection:text-[#0d1e3d]">
      <div className="w-full max-w-[880px] mx-auto">
        <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase">Analytics</h1>
        <p className="text-sm text-[#0d1e3d]/50 mb-12">
          Cookieless, self-hosted. Unique visitors are estimated via daily-salted hashes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <StatCard label="Pageviews (total)" value={stats.totalPageviews} />
          <StatCard label="Clicks (total)" value={stats.totalClicks} />
          <StatCard label="Pageviews (today)" value={today.pageviews} />
          <StatCard label="Unique visitors (~7d)" value={uniquesLast7} />
        </div>

        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-4">
            Last 7 days
          </h2>
          <div className="flex items-end gap-2 h-24">
            {[...stats.dailySeries].reverse().map((d) => {
              const max = Math.max(1, ...stats.dailySeries.map((s) => s.pageviews));
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-[#0d1e3d]/20 rounded-sm"
                    style={{ height: `${Math.max(4, (d.pageviews / max) * 80)}px` }}
                    title={`${d.pageviews} pageviews, ~${d.uniqueVisitors} unique`}
                  />
                  <span className="text-[10px] text-[#0d1e3d]/40">{d.day.slice(5)}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <RankedList title="Top pages" items={stats.topPaths} unit="views" />
          <RankedList title="Top links clicked" items={stats.topLinks} unit="clicks" />
          <RankedList title="Top referrers" items={stats.topReferrers} unit="visits" />
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-4">
            Recent activity
          </h2>
          <div className="border border-[#0d1e3d]/10 rounded-lg divide-y divide-[#0d1e3d]/10 max-h-[400px] overflow-y-auto">
            {stats.recentEvents.length === 0 && (
              <p className="text-sm text-[#0d1e3d]/40 px-4 py-3">No events yet.</p>
            )}
            {stats.recentEvents.map((e, i) => (
              <div key={i} className="px-4 py-2.5 text-sm flex justify-between gap-4">
                <span className="text-[#0d1e3d]/80 truncate">
                  <span className="text-[#0d1e3d]/40">{e.type === "click" ? "click →" : "view"}</span>{" "}
                  {e.type === "click" ? e.target || e.href : e.path}
                </span>
                <span className="text-[#0d1e3d]/40 whitespace-nowrap text-xs pt-0.5">
                  {e.country} · {e.device} · {new Date(e.ts).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
