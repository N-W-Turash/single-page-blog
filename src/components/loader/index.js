import { Spinner } from "react-bootstrap";  

/**
 * Show a loading spinner during during ongoing aynchronous operation
 *
 */

const Loader = () => {
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}

export default Loader;
