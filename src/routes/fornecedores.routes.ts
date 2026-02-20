import { get } from "http";
import { FornecedorController } from "../modules/Fornecedor/controller/fornecedorController";
import { Router } from "express";

const fornecedorRoute = Router()

const fornecedorController = new FornecedorController()

fornecedorRoute.post("/fornecedores", fornecedorController.create)

fornecedorRoute.get("/fornecedores", fornecedorController.findAll)
