const useGetGridAction = props => {
    const { add, edit, remove } = props;

    const onAdd = () => {
        if (add && add.canExecute) {
            add.execute();
        }
    };
    const onEdit = () => {
        if (edit && edit.canExecute) {
            edit.execute();
        }
    };
    const onRemove = () => {
        if (remove && remove.canExecute) {
            remove.execute();
        }
    };
    return {
        onAdd,
        onEdit,
        onRemove
    };
};

export default useGetGridAction;
