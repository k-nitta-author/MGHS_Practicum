import { useNavigate } from "react-router-dom";


// This is a simple back button that can be used to navigate back to the previous page.
export default function BackButton() {

    let navigate = useNavigate(); // This is a hook that allows us to navigate to different pages.

    return (
        <button className={'back-button'} onClick={() => navigate(-1)}>Back</button>
    );
}