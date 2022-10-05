import express from 'express'
const router = express.Router();

import util from '../util/util.js';
const utilInstance = new util()

import dolarSiService from '../services/dolarSiService.js' // cambiar nombre (sacar dolarSiService) - 
const dolarSiServiceInstance = new dolarSiService()

import dolarController from '../controller/dolarController.js' // deprecated - no se usa en nuestra api.
const dolarInstance = new dolarController(dolarSiServiceInstance, utilInstance)

import dolarControllerBrca from '../controller/dolarController.js' // nuestro controlador 
const dolarInstanceBrca = new dolarControllerBrca(dolarSiServiceInstance, utilInstance)

/** 
 * @description Rutas dolar
 */
router.get('/api/all', dolarInstance.getAllValues)

////reacomodar


/* Dolar Blue sobre Dolar Oficial */
router.get('/api/var_usd_vs_usd_of', dolarInstanceBrca.getDolarBlueSobreOficial)
/* Cotización Dolar Blue */
router.get('/api/usd_blue', dolarInstanceBrca.getDolarBlue)
/* Cotización Dolar Oficial Mayorista */
router.get('/api/usd_of_mayorista', dolarInstanceBrca.getDolarOficialMayorista)  //pongamosle: usd_mayorista 
/* Cotización Dolar Minorista */
router.get('/api/usd_minorista', dolarInstanceBrca.getDolarMinorista)

/* Cotización Dolar Oficial Mayorista */
router.get('/api/usd_mayorista_by_date', dolarInstanceBrca.getDolarlMayoristaByDate)

export default router