import { useState, useEffect } from "preact/hooks";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { CodeFrame } from "./frame";
import { CopyCodeButton } from "../CopyCodeButton";
import CircleButton from "../CircleButton";
import { Icon } from "../Icon";
/*
 * A more featured code embed component that uses CodeMirror
 *
 * Props: {
 *   initialValue?: string;
 *   editable: boolean;
 *   previewable: boolean;
 *   previewHeight?: number;
 *   previewWidth?: number;
 * }
 */
export const CodeEmbed = (props) => {
  const [rendered, setRendered] = useState(false);
  const initialCode = props.initialValue ?? "";
  // Source code from Google Docs sometimes uses a unicode non-breaking space
  // instead of a normal one, but these break the code frame, so we replace them here.
  // We also replace them in CodeFrame, but replacing here too ensures people don't
  // accidentally copy-and-paste them out of the embedded editor.
  const [codeString, setCodeString] = useState(
    initialCode.replace(/\u00A0/g, " "),
  );

  const [previewCodeString, setPreviewCodeString] = useState(codeString);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) return <div className="code-placeholder" />;

  return (
    <div className="mb-md flex w-full flex-col overflow-hidden lg:flex-row">
      {props.previewable ? (
        <div className="flex lg:flex-col">
          <CodeFrame
            jsCode={previewCodeString}
            width={props.previewWidth}
            height={props.previewHeight}
          />
          {/* Looks more visually balanced with a slight leftward nudge */}
          <div className="gap-xs lg:flex">
            <CircleButton
              className="!bg-bg-gray-40 !p-sm lg:ml-[-2px]"
              onClick={() => {
                setPreviewCodeString(codeString);
              }}
            >
              <Icon kind="play" />
            </CircleButton>
            <CircleButton
              className="!bg-bg-gray-40 !p-sm"
              onClick={() => {
                setPreviewCodeString("");
              }}
            >
              <Icon kind="stop" />
            </CircleButton>
          </div>
        </div>
      ) : null}
      <div className="relative w-full md:w-[calc(100%-150px)]">
        <CodeMirror
          value={codeString}
          theme="light"
          width="100%"
          minimalSetup={{
            highlightSpecialChars: false,
            history: false,
            drawSelection: true,
            syntaxHighlighting: true,
            defaultKeymap: true,
            historyKeymap: true,
          }}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            autocompletion: false,
          }}
          extensions={[javascript(), EditorView.lineWrapping]}
          onChange={(val) => setCodeString(val)}
          editable={props.editable}
          onCreateEditor={(editorView) =>
            (editorView.contentDOM.ariaLabel = "Code Editor")
          }
        />
        <div className="absolute right-0 top-0 flex gap-xs p-xs">
          <CopyCodeButton textToCopy={codeString || initialCode} />
          <CircleButton
            onClick={() => {
              setCodeString(initialCode);
              setPreviewCodeString(initialCode);
            }}
            ariaLabel="Reset code to initial value"
          >
            <Icon kind="refresh" />
          </CircleButton>
        </div>
      </div>
    </div>
  );
};

export default CodeEmbed;
