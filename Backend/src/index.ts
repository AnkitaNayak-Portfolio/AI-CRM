import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/api";

// Initialize environment variables configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with default settings
app.use(cors());

// Parse incoming request JSON bodies
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Register API resource route paths under /api, /api/v1, and /api/api prefixes (to protect against duplicate prefix)
app.use("/api", router);
app.use("/api/v1", router);
app.use("/api/api", router);

// Default base route check
app.get("/", (req, res) => {
  res.json({ message: "Multi-Tenant CRM Backend System operational" });
});

// Global error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled Server Error:", err);
  res.status(500).json({ error: "Something went wrong inside the server" });
});

app.listen(PORT, () => {
  console.log(`CRM backend running on http://localhost:${PORT}`);
});
