import { ipcMain } from 'electron'

// Handle
ipcMain.handle("fetch-users", () => {
    
    return [
        {id: 1, nome: "TESTE 1"},
        {id: 2, nome: "TESTE 2"},
        {id: 3, nome: "TESTE 3"}
    ]
})