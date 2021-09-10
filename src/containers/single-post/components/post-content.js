import PropTypes from 'prop-types';
import EditIcon from "../../../assets/images/edit.svg";

const PostContent = (props) => {

    const { title, body, enableEditMode } = props;

    return (
        <>
            <h4 className="fw-bold my-4 text-primary d-inline-block">
                {title}
                <span>
                    <img
                        src={EditIcon}
                        alt="Edit Icon"
                        className="edit-icon ms-3"
                        onClick={enableEditMode}
                    />
                </span>
            </h4>

            <p className="my-2">{body}</p>
        </>
    );
}

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    enableEditMode: PropTypes.func.isRequired
};

export default PostContent;


