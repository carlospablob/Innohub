var accounts = {
    "Accounts": [
        {
            "Id": 21,
            "Name": "John Shepherd",
            "LogonCount": 13,
            "LastLogon": new Date(2019, 1, 14, 16, 15, 6, 111)
        },
        {
            "Id": 2,
            "Name": "Carlos Pablo",
            "LogonCount": 13,
            "LastLogon": new Date(2019, 1, 13, 16, 15, 6, 111)
        },
        {
            "Id": 5,
            "Name": "Daniel Sosa",
            "LogonCount": 13,
            "LastLogon": new Date(2019, 1, 14, 16, 15, 6, 111)
        }
    ]
}

var logons = {
    "Logons": [
        {
            "Id": 2,
            "Name": "",
            "Date": new Date(2019, 1, 14, 16, 15, 6, 110)
        },
        {
            "Id": 21,
            "Name": "John Shepherd",
            "Date": new Date(2019, 1, 14, 16, 15, 6, 111)
        },
        {
            "Id": 6,
            "Name": "Wendy Aguirre",
            "Date": new Date(2019, 1, 14, 16, 15, 6, 111)  
        }
    ]
}

function updateAccounts(accounts, logons) {
    
    logons.Logons.forEach(log => {     
        let ac = accounts.Accounts.find(account => log.Id === account.Id)
        if (ac) {
            ac.LogonCount += 1 
            // console.log('ID:: ' + ac.Id + ' ' + ac.LastLogon.getTime() + ' < ' + log.Date.getTime());
            log.Date = (ac.LastLogon.getTime() < log.Date.getTime()) ? ac.LastLogon : log.Date;
            log.Name === '' ? ac.Name : log.Name;
            
        } else {
            accounts.Accounts.push(
                {
                    "Id": log.Id,
                    "Name": log.Name,
                    "LogonCount": 1,
                    "LastLogon": new Date()
                }
            )
        }
    });


    return accounts.Accounts.sort((a, b) => {
        if (a.Id > b.Id) {
          return 1;
        }
        if (a.Id < b.Id) {
          return -1;
        }
        return 0;
      });
      
}

console.log(updateAccounts(accounts, logons));
