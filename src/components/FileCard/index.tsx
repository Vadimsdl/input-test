import { FC } from "react";
import { IFile } from "../../types/file";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { removeFile } from "../../store/filesSlice";
import "./style.css";

interface IProps {
  item: IFile;
}

const FileCard: FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFile(item.id));
  };

  return (
    <div className="card">
      <div className="info">
        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
        <p>Size: {`${item.size.toFixed(2)} Mb`}</p>
        <p>Last modify: {item.lastModify.toDateString()}</p>
        <p>Path: {item.path}</p>
      </div>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default FileCard;
