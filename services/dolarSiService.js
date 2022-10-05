import { xml2json } from 'xml-js';
import pkg from 'axios';
const { get } = pkg;
import dotenv from "dotenv";
dotenv.config()

/* Token extraido de .ENV para llamada a API */
let token = process.env.DOLAR_BRCA_KEY;
class dolarSiService {
    /**
     * @description Obtener un json parseado con los valores de dolarSi
     */
    getInfoDolar = async (req, res) => {
        try {
            const dataDolar = await get("https://www.dolarsi.com/api/dolarSiInfo.xml")
            const json = xml2json(dataDolar.data, {compact: true, spaces: 4});
            const jsonParsed = JSON.parse(json);

            return jsonParsed
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
///////////////////reacomodar igual q el controller

    getInfoDolarBlueSobreOficial = async (req, res) => {
        try {
            
            const dataDolar = await get("https://api.estadisticasbcra.com/var_usd_vs_usd_of",{
                headers: {
                    'Authorization': `BEARER ${token}` 
                }
            }
            )
            return dataDolar
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getInfoDolarBlue = async (req, res) => {
        try {
            const dataDolar = await get("https://api.estadisticasbcra.com/usd_of",{
                headers: {
                    'Authorization': `BEARER ${token}` 
                }
            }
            )
            console.log(dataDolar);
            return dataDolar
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getInfoDolarOficialMayorista = async (req, res) => {
        try {
            const dataDolar = await get("https://api.estadisticasbcra.com/usd_of",{
                headers: {
                    'Authorization': `BEARER ${token}` 
                }
            }
            )
            return dataDolar
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
    
    getInfoDolarMinorista = async (req, res) => {
        try {
            const dataDolar = await get("https://api.estadisticasbcra.com/usd_of_minorista",{
                headers: {
                    'Authorization': `BEARER ${token}` 
                }
            }
            )
            return dataDolar
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}
export default dolarSiService