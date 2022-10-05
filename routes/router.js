import express from 'express'
const router = express.Router();

import util from '../../../util/util.js';
const utilInstance = new util()

import dolarSiService from '../../../services/dolarSiService.js'
const dolarSiServiceInstance = new dolarSiService()

import dolarController from '../controller/dolarController.js'
const dolarInstance = new dolarController(dolarSiServiceInstance, utilInstance)

import dolarControllerBrca from '../controller/dolarController.js'
const dolarInstanceBrca = new dolarControllerBrca(dolarSiServiceInstance, utilInstance)

/** 
 * @description Rutas dolar
 */
router.get('/api/all', dolarInstance.getAllValues)

/* Dolar Blue sobre Dolar Oficial */
router.get('/api/var_usd_vs_usd_of', dolarInstanceBrca.getDolarBlueSobreOficial)
/* Cotización Dolar Blue */
router.get('/api/usd_blue', dolarInstanceBrca.getDolarBlue)
/* Cotización Dolar Oficial Mayorista */
router.get('/api/usd_of_mayorista', dolarInstanceBrca.getDolarOficialMayorista)
/* Cotización Dolar Minorista */
router.get('/api/usd_minorista', dolarInstanceBrca.getDolarMinorista)


export default router