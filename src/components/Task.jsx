import PropType from "prop-types";
import { background, color } from "storybook/internal/theming";

export default function Task({
    task: {id, title, state}, 
    onPinTask, 
    onArchiveTask
}){
    return(
        <div className={`list-item ${state}`}>
            <label
                htmlFor="checked"
                className="checkbox"
                >
                <input 
                    type="checkbox"
                    name="checked"
                    id={`archeiveTask-${id}`}
                    aria-label={`archiveTask-${id}`}
                    />
                    <span
                        className="checkbox-custom"
                        onClick={() => onArchiveTask(id)}
                    ></span>
            </label>
            <label htmlFor="title" className="title" aria-label={title}>
                <input 
                    type="text"
                    value={title}
                    readOnly={true}
                    name="title"
                    placeholder="input title"
                    style={{backgroundColor:"red"}}
                    />
            </label>

            {state !== "TASK_ARCHIVED" &&(
                <button
                    className="pin-button"
                    id={`pinTask-${id}`}
                    aria-label={`pinTask-${id}`}
                    onClick={() => onPinTask(id)}
                    >
                    <span className="icon-star"></span>
                </button>
            )}
        </div>
    );
}

Task.proptype = {
    task: PropType.shape({
        id: PropType.string.isRequired,
        title: PropType.string.isRequired,
        state: PropType.string.isRequired,
    }),
    onPinTask: PropType.func,
    onArchiveTask: PropType.func,
};