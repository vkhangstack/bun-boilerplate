import express from "express";
import Useragent from "express-useragent";
import { GeneratorService, LoggerService } from "services";
import pingRoute from "router/ping";
import apiRoute from "router/route";

const app = express();

(async () => {
  app.enable("trust proxy")
  app.use(Useragent.express())

  app.use("/ping", pingRoute.route())
  app.use("/", apiRoute.route())
  app.use(express.urlencoded({ extended: true, limit: "500kb" }))
  app.use(express.json({ limit: "500kb" }))

  const port = 4000
  const generatorService = GeneratorService.getInstance()
  const loggerService = LoggerService.getInstance()
  const key = generatorService.generateKey()


  app.set("KEY", key)
  loggerService.debug('Application generated key', key)


  app.listen(port, "0.0.0.0",  () => {
    loggerService.info(`Server listening port ${port}`)
  })
})();

export default app