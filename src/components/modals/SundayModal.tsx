import { useEffect } from 'react'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { fireConfetti } from '../../util/fireConfetti'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const SundayModal = ({ isOpen, handleClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      fireConfetti()
    }
  }, [isOpen])

  return (
    <BaseModal
      title="Acara Istimewa"
      isOpen={isOpen}
      handleClose={handleClose}
      highlight
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Perkataan hari ini ialah kata nama khas yang hanya Mama tahu. Contoh:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" status="correct" />
        <Cell value="O" status="correct" />
        <Cell value="R" status="correct" />
        <Cell value="M" status="correct" />
        <Cell value="A" status="correct" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">Hampir!</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" status="correct" />
        <Cell value="O" status="correct" />
        <Cell value="R" status="correct" />
        <Cell value="M" status="correct" />
        <Cell value="A" status="correct" />
        <Cell value="H" status="correct" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">Tepat!</p>
    </BaseModal>
  )
}
