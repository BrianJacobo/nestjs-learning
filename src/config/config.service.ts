import * as fs from 'fs'
import {parse} from 'dotenv'

export class ConfigService {
    private readonly envConfig : {[key: string]: string};
    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !=="production";

        if(isDevelopmentEnv){
            //ENTRANDO A DESARROLLO
            const envFilePath = __dirname+'../../.env';
            const existsPath = fs.existsSync(envFilePath)
            
            if(!existsPath){
                console.log(".env file doesn't exist")
                process.exit(0)
            }
            this.envConfig= parse(fs.readFileSync(envFilePath))
        }else{
            //SI ESTAMOS EN PRODUCCION-->
            this.envConfig={
                PORT : process.env.PORT,
            }
        }
    }

    get(key: string):string{
        return this.envConfig[key]
    }
}
