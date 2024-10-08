import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { TrashIcon } from "lucide-react";

import  {  useUpdateWorkspace}  from "@/features/workspaces/api/use-update-workspace";


interface PreferencesModelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  intialValue: string;
}

export const PreferencesModel = ({
  open,
  setOpen,
  intialValue,
}: PreferencesModelProps) => {
  const [value, setValue] = useState(intialValue);
  const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } = useUpdateWorkspace();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle>{value}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Workspace name</p>
              <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                Edit
              </p>
            </div>
            <p className="text-sm">{value}</p>
          </div>
          <button
          disabled={false}
            onClick={() => {}}
            className="flex  items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600"
          >
            <TrashIcon className="size-4" />
            <p className="text-sm font-semibold">Delete workspace</p>

          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
