import react from "react";
import { ContainerGeral, ContainerErro, CardErro, TextoErro, Piadinha } from "./Error-styled";

const PaginaErro = () => {

    return(

        <ContainerGeral>           
            <ContainerErro>
                <CardErro>
                    <TextoErro>
                        <p>Algo de Errado não está certo ! ! !</p>
                    </TextoErro>
                    <Piadinha>
                        <p>Ao persistirem os sintomas reclame com seu dev...:)</p>
                    </Piadinha>
                </CardErro>
            </ContainerErro>
        </ContainerGeral>
    )


}
export default PaginaErro