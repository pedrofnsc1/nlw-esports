import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalAdForm } from "./ModalAdForm";

export function CreateAdBanner(){
    return (
      <Dialog.Root>
        <div className='pt-1 bg-duo-fade self-stretch rounded-lg mt-8 overflow-hidden'>
          <div className='bg-[#2A2634] py-6 px-8 flex justify-between items-center'>
            <div>
              <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
            </div>

            <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white  rounded-md flex items-center gap-3'>
              <MagnifyingGlassPlus size={20} weight="bold"/>
              Publicar anúncio
            </ Dialog.Trigger>
            <ModalAdForm/>
          </div>
        </div>
      </Dialog.Root>
        
    )
}