import { AccountIdentifier } from './account'
import { Bridge } from './bridge'
import { Message, Transfer } from './message'

export function backup(bridge: Bridge, __id: number, destinationPath: string) {
  return bridge({
    id: __id,
    cmd: 'Backup',
    payload: destinationPath
  })
}

export function restoreBackup(bridge: Bridge, __id: number, backupPath: string) {
  return bridge({
    id: __id,
    cmd: 'RestoreBackup',
    payload: backupPath
  })
}

export function setStrongholdPassword(bridge: Bridge, __id: number, password: string) {
  return bridge({
    id: __id,
    cmd: 'SetStrongholdPassword',
    payload: password
  })
}

export function send(bridge: Bridge, __id: number, fromAccountId: AccountIdentifier, transfer: Transfer) {
  return bridge({
    id: __id,
    cmd: 'SendTransfer',
    payload: {
      transfer,
      accountId: fromAccountId
    }
  })
}
