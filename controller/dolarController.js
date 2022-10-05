class dolarController { //The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(dolarSiService, util) { //cambiar nombre de dolarSiService
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

//funcion para traer el valor del dolar mayorista con una fecha que ingresa el usuario en un parametro en la url 
//funcion para traer el valor del dolar mayorista con una fecha que ingresa el usuario en un parametro en el body

//funcion para traer el valor del dolar mayorista con un rango de fechas que ingresa el usuario en un parametro en la url (fecha_inicio - fecha_fin)

//funcion para traer el valor del dolar mayorista con la fecha del dia de hoy ---- Date() // mejor traer la ultima y mostrar la fecha con una observacion.

    getDolarlMayoristaByDate = async (req, res) => {
        try {
            let fecha = '2022-10-04'
            console.log(fecha)
            const data = await this.dolarSiService.getInfoDolarOficialMayorista();
            const valores = { valores : data.data }
            console.log(valores.length)

            for( let i = 0 ; i<valores.length ; i++){
                if(fecha == valores[i]){
                    res.send(valores[i].v)
                }
            }
                     

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
}

export default dolarController