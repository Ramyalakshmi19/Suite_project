import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from '@/components/ui/button';
  import { MdEditSquare, MdDelete } from "react-icons/md";
  import {useState} from "react"

  import {Api} from "@/Api"
const DeleteDialog = ({id}:{id:string}) => {
    const [status,setStatus]=useState<boolean>(false);
    const handleDelete=()=>
    {
        Api.delete(`/users/delete_user?id=${id}`)
        .then((data)=>{
            setStatus(true);
        })
        .catch(err=>{
            setStatus(false);
        })
        window.location.reload(false);
    }
  return (
    <AlertDialog>
    <AlertDialogTrigger>
        <Button className='bg-red-500 rounded-xl hover:bg-red-400'>
                                    <span>Delete</span>
                                    <MdDelete />
            </Button>
    </AlertDialogTrigger>
    <AlertDialogContent  className='bg-[#1F1E27] h-42 outline-none border-none rounded-lg overflow-y-scroll addDialog'>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>
        <Button onClick={handleDelete}>Delete</Button>
            </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default DeleteDialog