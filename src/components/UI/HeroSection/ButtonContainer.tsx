import ButtonComponent from "../Button/ButtonComponent";

export default function ButtonContainer(){
    return (
        <div className="flex">
            <div>
                <ButtonComponent  onClick={()=>{}} text="Explore Courses" variant="primary"/>
            </div>
            <div>
                <ButtonComponent  onClick={()=>{}} text="View Pricing" variant="secondary"/>
            </div>
        </div>
    )
}