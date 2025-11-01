import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import trash from "../../assets/trash.json";

export function ConfirmDelete({ isOpenDelete, setIsOpenDelete, handleDelete }) {
  return (
    <Dialog open={isOpenDelete} onOpenChange={setIsOpenDelete}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Lottie
              animationData={trash}
              style={{ width: 200, height: 200 }}
              className="mx-auto"
              loop={true}
            />
            <Label className="text-2xl font-bold justify-center">
              Confirm Delete
            </Label>
            <Label className="text-center font-normal text-[#7b7b7b]">
              Are you sure you want to delete this item? This action cannot be
              undone
            </Label>
          </div>
        </div>
        <DialogFooter className="grid grid-cols-2 ">
          <DialogClose asChild>
            <Button
              onClick={() => setIsOpenDelete(false)}
              variant="outline"
              className="hover:cursor-pointer"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-red-500 hover:cursor-pointer"
            onClick={() => handleDelete()}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default ConfirmDelete;
