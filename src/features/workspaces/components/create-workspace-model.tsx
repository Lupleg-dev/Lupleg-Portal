import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutate } = useCreateWorkspace();


  const handleClose = () => {
    setOpen(false);
    // TODO: reset form
  };

  const handleSubmit = async() => {
    try {
     const data = await mutate({
      name: "Lupleg Community",
    }, {
      onSuccess(data) {
        
      },
      onError(error) {
        
      },
    })
    } catch(error) {

    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
            <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. Lupleg Community"

            />
            <div className="flex justify-end">
                <Button 
                disabled={false}
                type="submit">
                    Create
                    </Button>

            </div>

        </form>
      </DialogContent>
    </Dialog>
  );
};