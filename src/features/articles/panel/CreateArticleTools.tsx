import React, { Dispatch, RefObject, SetStateAction } from "react";

import { styles } from "@/styles";
import { editor } from "@/utils/editor";

import {
  LinkIcon,
  QuoteIcon,
  ImageIcon,
  ItalicIcon,
  DividerIcon,
  LineThroughIcon,
} from "@/assets/icons/svgs";

type props = {
  EditorCommandHandler: any;
  textRef: null | RefObject<HTMLTextAreaElement>;
  setUploadArticleImage: Dispatch<SetStateAction<boolean>>;
};

function CreateArticleTools({
  textRef,
  EditorCommandHandler,
  setUploadArticleImage,
}: props) {
  return (
    <div className="flex items-stretch gap-2 flex-wrap">
      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, "#"));
        }}
        className={`${styles.secondaryButton} p-[6px]`}
      >
        H1
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, "##"));
        }}
        className={`${styles.secondaryButton} p-[6px]`}
      >
        H2
      </button>
      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, "###"));
        }}
        className={`${styles.secondaryButton} p-[6px]`}
      >
        H3
      </button>
      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, "####"));
        }}
        className={`${styles.secondaryButton} p-[6px]`}
      >
        H4
      </button>
      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, "#####"));
        }}
        className={`${styles.secondaryButton} p-[6px]`}
      >
        H5
      </button>

      <div className="mx-1 h-8 w-[1px] bg-dim-secondary" />

      <button
        onClick={() => {
          EditorCommandHandler(editor.boldHandler(textRef, "**"));
        }}
        className={`${styles.secondaryButton} p-[6px] px-[10px]`}
      >
        B
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.boldHandler(textRef, "*"));
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <ItalicIcon />
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.boldHandler(textRef, "~"));
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <LineThroughIcon />
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.dividerHandler(textRef));
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <DividerIcon />
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.linkHandler(textRef));
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <LinkIcon />
      </button>

      <button
        onClick={() => {
          EditorCommandHandler(editor.addHeading(textRef, ">"));
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <QuoteIcon />
      </button>

      <button
        onClick={() => {
          setUploadArticleImage(true);
        }}
        className={`${styles.secondaryButton} py-[9px] px-[9px]`}
      >
        <ImageIcon />
      </button>
    </div>
  );
}

export default CreateArticleTools;
