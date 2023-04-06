import { ShareAndroid } from "iconoir-react";

import Button from "../ui/button";
import { toast, Toaster } from "sonner";

interface iCopyUrl {
  url: string;
}

const CopyUrl = (props: iCopyUrl) => {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
      toast.success("Copied to clipboard", {
        style: {
          background: "#121212",
        },
      });
    } catch (error) {
      toast("Error: Could not copy to clipboard", {
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => copyToClipboard(`${props.url}`)}
        icon={<ShareAndroid width={15} />}
      >
        Share
      </Button>
      <Toaster position="bottom-center" theme="dark" />
    </>
  );
};

export default CopyUrl;
