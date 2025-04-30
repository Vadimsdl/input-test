import { DragEvent, useId, useRef, useState } from "react";
import "./style.css";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addFile } from "../../store/filesSlice";
import { extractFileInfo } from "../../helpers/file";

const DragAndDrop = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const id = useId();

  const onDragLeave = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const onDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setFile(null);
    }
  };

  const handleAdd = () => {
    if (file) {
      const fileInfo = extractFileInfo(file);
      dispatch(addFile(fileInfo));
      console.log(fileInfo);

      handleClear();
    }
  };

  return (
    <div className="drag_container">
      <div
        className="drag-input_container"
        onDrop={handleDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={handleClick}
      >
        <label htmlFor={id}>
          {file?.name ? file.name : "Drag and Drop file or click this area"}
        </label>
        <input
          ref={inputRef}
          name={id}
          type="file"
          multiple
          onChange={(e) => setFile(e.target.files && e.target.files[0])}
        />
      </div>
      <div className="actions">
        <Button full onClick={handleAdd}>
          Add
        </Button>
        <Button full variant="danger" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DragAndDrop;
