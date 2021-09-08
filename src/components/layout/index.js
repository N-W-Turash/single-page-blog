import Header from "../header";

const withLayout = (page) => {
    return () => (
        <>
            <Header />
            {page}
        </>
    )
};

export default withLayout;


