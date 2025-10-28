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

export function DialogTopic({ isOpenPreview, setIsOpenPreview, topic }) {
  return (
    <Dialog open={isOpenPreview} onOpenChange={setIsOpenPreview}>
      <DialogTitle className="sr-only">Preview Topic</DialogTitle>
      <DialogContent className="sm:max-w-[768px] h-[80vh] overflow-auto">
        <PreviewTopic contentBlock={topic} />
      </DialogContent>
    </Dialog>
  );
}
export default DialogTopic;
