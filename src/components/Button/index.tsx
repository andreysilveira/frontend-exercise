import { ButtonAdopted } from "./style";

function Button({text, size, ...props}: any){
    return(
        <>
        <ButtonAdopted background={"#3e8ed0"} {...props} size={size}>
            {text}
        </ButtonAdopted>
        </>
    );
}

export {Button}