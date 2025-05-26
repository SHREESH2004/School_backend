import e from "express";
import schoolRoutes from "./router/school.router.js";

const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use('/school',schoolRoutes)
export default app;
