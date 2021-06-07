import { useEffect, useRef, useState } from "react";

import { useFile } from "../../../hooks/queries";
import { FileModel } from "../contexts/FileModel";

export type FileState = {
  isDeleted: boolean;
  isInitialized: boolean;
  isLoaded: boolean;
  isReadOnly: boolean;
  path: string;
};

export type FileHook = {
  file: FileState;
  model: FileModel;
};

export const defaultFileState = {
  isDeleted: false,
  isInitialized: false,
  isLoaded: false,
  isReadOnly: true,
  path: "",
};

export const useFileModel = (id: string): FileHook => {
  const modelRef = useRef<FileModel>();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [path, setPath] = useState("");
  const { data } = useFile({ id });
  const file = data?.file || null;

  useEffect(() => {
    modelRef.current = new FileModel();
    modelRef.current.bind("is_initialized", setIsInitialized);
    modelRef.current.bind("path", setPath);
    return () => modelRef.current.dispose();
  }, []);

  useEffect(() => {
    if (!file) return;

    modelRef.current.setFile(file);
    setIsLoaded(true);
    setPath(file.path);
  }, [file]);

  return {
    file: {
      isDeleted: file && file.is_deleted,
      isInitialized,
      isLoaded,
      isReadOnly: !file || file.is_read_only,
      path,
    },
    model: modelRef.current,
  };
};