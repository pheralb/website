import { ShareAndroid } from "iconoir-react";
import { toast } from "wc-toast";
import confetti from "canvas-confetti";
import Button from "../ui/button";

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
      toast("Copied to clipboard", {
        duration: 4000,
      });
      confetti({
        particleCount: 20,
        startVelocity: 30,
        spread: 300,
        gravity: 1.2,
        origin: { y: 0 },
      });
    } catch (error) {
      toast("Error: Could not copy to clipboard, check your browser", {
        duration: 2000,
      });
    }
  };

  return (
    <Button
      onClick={() => copyToClipboard(`${props.url}`)}
      icon={<ShareAndroid width={15} />}
    >
      Share
    </Button>
  );
};

export default CopyUrl;
