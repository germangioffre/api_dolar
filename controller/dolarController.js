class dolarController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

    /**
     * @description Obtener todos los valores
     * @returns Todos los valores
     */
     getAllValues = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()            
            const valores = { valores : data.cotiza }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
    /**
     * @description Obtener brecha entre blue y oficial
     * @returns array objetos con "d" & "v", con la fecha y valor (date & value) con el valor de la brecha entre el blue y oficial
     */
    getDolarBlueSobreOficial = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolarBlueSobreOficial();
            const valores = { valores : data.data }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
    /**
     * @description Obtener valor dolar Blue
     * @returns array objetos con "d" & "v", con la fecha y valor (date & value) con el valor del dolar blue
     */
    getDolarBlue = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolarBlue();
            const valores = { valores : data.data }
            console.log(valores);
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
    /**
     * @description Obtener dolar oficial mayorista
     * @returns array objetos con "d" & "v", con la fecha y valor (date & value) con el valor del dolar oficial mayorista
     */
    getDolarOficialMayorista = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolarOficialMayorista();
            const valores = { valores : data.data }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
    /**
     * @description Obtener brecha entre blue y oficial
     * @returns array objetos con "d" & "v", con la fecha y valor (date & value). con el valor del dolar minorista
     */
    getDolarMinorista = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolarMinorista();
            const valores = { valores : data.data }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

export default dolarController