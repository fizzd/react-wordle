import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara bermain" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Teka perkataan dalam 6 percubaan. Selepas setiap tekaan, warna jubin
        akan tukar untuk menunjukkan betapa hampir tekaan mama dengan perkataan
        itu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" status="correct" />
        <Cell value="E" />
        <Cell value="P" />
        <Cell value="A" />
        <Cell value="D" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf K terdapat dalam perkataan dan di tempat yang betul.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="B" />
        <Cell value="U" status="present" />
        <Cell value="N" />
        <Cell value="D" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf U terdapat dalam perkataan tetapi di tempat yang salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="Y" />
        <Cell value="A" status="absent" />
        <Cell value="N" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf A tiada dalam perkataan.
      </p>
    </BaseModal>
  )
}
