import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import trash from "../../assets/trash.json";
import PreviewTopic from "../PreviewTopic";

export function DialogTopic({
  isOpenPreview,
  setIsOpenPreview,
  topic,
  inputValue,
}) {
  return (
    <Dialog open={isOpenPreview} onOpenChange={setIsOpenPreview}>
      <DialogTitle className="sr-only">Preview Topic</DialogTitle>
      <DialogContent className="sm:max-w-[768px] h-[80vh] overflow-auto p-0 border-transparent">
        <PreviewTopic contentBlock={topic} inputValue={inputValue} />
      </DialogContent>
    </Dialog>
  );
}
export default DialogTopic;
