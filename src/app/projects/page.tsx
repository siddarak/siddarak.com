import Link from "next/link";

const projects = [
    {
        title: "Autonomous 3D Capture System",
        description:
            "Building an end-to-end autonomous drone system that generates 3D Gaussian splat reconstructions. Built orbital flight generator with continuous POI tracking using DJI WPML/MSDK format. Implementing indoor positioning for GPS-free navigation and real-time object recognition.",
        tags: ["python", "dji-msdk", "computer-vision", "gaussian-splatting", "wpml"],
        link: null,
        linkLabel: null,
        date: "Jan 2026 – Ongoing",
    },
    {
        title: "Theorem Proving Automation",
        description:
            "Trained LSTM and Transformer models to automate tactic selection in the Lean theorem prover. Achieved 67% top-5 accuracy on the LeanDojo dataset (10K+ theorem-proof pairs). Targeting 40% reduction in manual proof construction effort.",
        tags: ["pytorch", "lstm", "transformers", "leandojo"],
        link: null,
        linkLabel: null,
        date: "Oct – Dec 2025",
    },
    {
        title: "Human Anomaly Detection System",
        description:
            "Designed real-time anomaly detection combining YOLOv8 (object detection) with MobileLSTM (temporal action classification). 90% spatial accuracy and 97% temporal accuracy for RGB video-based public safety surveillance.",
        tags: ["yolov8", "mobilelstm", "tensorflow", "pytorch", "ultralytics"],
        link: null,
        linkLabel: null,
        date: "2024",
    },
    {
        title: "Precision Agriculture Tree Analytics",
        description:
            "Drone-based system using YOLOv5s deep learning for automated tree counting and classification. Captured aerial images at 100m altitude, divided land into grids, and stitched images — achieving 95% detection accuracy across 500+ farmlands.",
        tags: ["yolov5s", "python", "computer-vision", "nodejs", "google-colab"],
        link: null,
        linkLabel: null,
        date: "Oct – Dec 2023",
    },
    {
        title: "ASL Recognition & Detection",
        description:
            "Classified 29 ASL alphabets + 3 special characters using Random Forest on 87,000+ images. Built NLP module for enhanced TTS output via Google TTS. Published: \"ASL Recognition and Detection: A Review\" at ICIVC (2023).",
        tags: ["mediapipe", "random-forest", "nlp", "google-tts"],
        link: null,
        linkLabel: null,
        date: "Jun – Dec 2023",
    },
    {
        title: "CrossLiquor — Market Basket Analysis",
        description:
            "Sales analysis engine using the Apriori algorithm for cross-selling opportunity identification in large transactional databases. Extracted hidden patterns through data mining and generated association-based insights for marketing.",
        tags: ["python", "flask", "sqlalchemy", "apriori", "data-mining"],
        link: null,
        linkLabel: null,
        date: "May 2022 – Jun 2023",
    },
    {
        title: "MyChatApp",
        description:
            "Real-time multi-user chat application with MongoDB-backed message storage and passing via Mongoose.",
        tags: ["javascript", "nodejs", "mongodb", "mongoose"],
        link: null,
        linkLabel: null,
        date: "Mar – Apr 2022",
    },
];

const techStack = {
    languages: "Python, C++, Java, R, JavaScript, HTML/CSS",
    "ml & ai": "PyTorch, TensorFlow, scikit-learn, Keras, JAX, LangChain, Transformers, Ultralytics",
    "computer vision": "YOLOv5s, YOLOv8, MediaPipe, Gaussian Splatting",
    "data & stats": "NumPy, Pandas, Matplotlib, Seaborn, SciPy, Jupyter",
    "devops & infra": "Docker, Kubernetes, Kubeflow, MLflow, AWS EMR, Terraform, CI/CD",
    databases: "PostgreSQL, MySQL, MongoDB",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen px-6 py-16 selection:bg-[#e0f2fe] selection:text-[#0d1e3d]">
            <div className="w-full max-w-[640px] mx-auto">
                <Link
                    href="/me"
                    className="text-sm text-[#0d1e3d]/50 hover:text-[#0d1e3d] transition-colors"
                >
                    ← back to home
                </Link>

                <h1 className="text-2xl font-bold tracking-tight mt-10 mb-10 uppercase">
                    Stuff I&apos;ve Built
                </h1>

                <div>
                    {projects.map((project) => (
                        <div key={project.title} className="border-b border-[#0d1e3d]/10 pb-8 mb-8 last:border-0 last:mb-0">
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="text-base font-semibold">{project.title}</h3>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-[#0d1e3d]/40 hover:text-[#0d1e3d] transition-colors whitespace-nowrap"
                                    >
                                        {project.linkLabel || "github"} →
                                    </a>
                                ) : (
                                    <span className="text-xs text-[#0d1e3d]/25 whitespace-nowrap">
                                        {project.date}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-[#0d1e3d]/60 mt-2 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] font-mono px-1.5 py-0.5 rounded border border-[#0d1e3d]/20 text-[#0d1e3d]/40"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#0d1e3d]/10 my-10" />

                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-6">
                    Tech Stack
                </h2>
                <div className="space-y-3">
                    {Object.entries(techStack).map(([category, tools]) => (
                        <div key={category} className="text-sm">
                            <span className="font-bold capitalize">{category}:</span>{" "}
                            <span className="text-[#0d1e3d]/60">{tools}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/me"
                        className="text-xs text-[#0d1e3d]/40 hover:text-[#0d1e3d] transition-colors"
                    >
                        ← back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
