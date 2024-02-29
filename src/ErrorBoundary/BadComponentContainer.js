import BadComponent from "./BadComponent";
//import ErrorBoundary from "./ErrorBoundaryClass";
import { ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export default function BadComponentContainer(){
    return <>
    <h1>This is the Container</h1>
 <ErrorBoundary  FallbackComponent={ErrorFallback}> 

        <BadComponent/> 
</ErrorBoundary>
    
    <Footer />
    </>


}

const Footer=()=>{
    return <h4>     Copyright information:adsfdsgf    </h4>
        }