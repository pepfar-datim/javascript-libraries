import {idName} from "../../types/idName.type";
import {UserType} from "../../types/userType.type";

export type TestCase = {
    userGroups: idName[],
    userType: UserType
}

export const testCases:TestCase[]=[{
    userType:UserType.Partner,
    userGroups: [
        {
            "name": "OU Tanzania Partner 850490815 users - MANAGEMENT AND DEVELOPMENT FO R HEALTH",
            "id": "DB5pk3AVjAB"
        },
        {
            "name": "Data MER entry",
            "id": "hCofOhr3q1Q"
        },
        {
            "name": "Data MER access",
            "id": "c6hGi8GEZot"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        }
    ]
},{
    userType:UserType.Partner,
    userGroups:[
        {
            "name": "OU Cameroon Partner 828131156 users - Metabiota, Inc.",
            "id": "nLDdvJatAdp"
        },
        {
            "name": "Data MER access",
            "id": "c6hGi8GEZot"
        },
        {
            "name": "Data MER DOD entry",
            "id": "rP0VPKQcC8y"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        }
    ]
},{
    userType:UserType.GlobalAgency,
    userGroups: [
        {
            "name": "Global Agency HHS/CDC user administrators",
            "id": "TF24aqj1A4w"
        },
        {
            "name": "Data ER access",
            "id": "M9Uer9SioL7"
        },
        {
            "name": "Data HRH access",
            "id": "seh1e61fwp1"
        },
        {
            "name": "Global Agency HHS/CDC users",
            "id": "NYkn7ZSgtUJ"
        },
        {
            "name": "Data ER entry",
            "id": "XgctRYBpSiR"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        },
        {
            "name": "Data DHI access",
            "id": "zZ711zXQxw8"
        }
    ]
},{
    userType: UserType.GlobalPartner,
    userGroups: [
        {
            "name": "Global Partner 605799469 users - UNIVERSITY OF WASHINGTON",
            "id": "ULSa1qmHVmS"
        },
        {
            "name": "Data MCAE access",
            "id": "d3E1aOVZZkZ"
        },
        {
            "name": "Data ER access",
            "id": "M9Uer9SioL7"
        },
        {
            "name": "Global Partner 605799469 user administrators - UNIVERSITY OF WASHINGTON",
            "id": "siBmSmSVn4r"
        },
        {
            "name": "Data HRH access",
            "id": "seh1e61fwp1"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        },
        {
            "name": "Data DHI access",
            "id": "zZ711zXQxw8"
        },
        {
            "name": "Data MER access",
            "id": "c6hGi8GEZot"
        }
    ]
},{
    userType: UserType.Global,
    userGroups: [
        {
            "name": "Data ER access",
            "id": "M9Uer9SioL7"
        },
        {
            "name": "Global users",
            "id": "gh9tn4QBbKZ"
        },
        {
            "name": "Data SaSR access",
            "id": "CwFniyubXbx"
        },
        {
            "name": "Data MOH access",
            "id": "OoiLAfMTyMx"
        },
        {
            "name": "Data SIMS access",
            "id": "iuD8wUFz95X"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        },
        {
            "name": "Data MER access",
            "id": "c6hGi8GEZot"
        }
    ]
}, {
    userType: UserType.InterAgency,
    userGroups: [
        {
            "name": "Data MCAE access",
            "id": "d3E1aOVZZkZ"
        },
        {
            "name": "Data SaSR access",
            "id": "CwFniyubXbx"
        },
        {
            "name": "Data SIMS access",
            "id": "iuD8wUFz95X"
        },
        {
            "name": "Data ESOP access",
            "id": "TRBfaInIiOK"
        },
        {
            "name": "OU Tanzania Interagency users",
            "id": "cUIM0MRIVck"
        },
        {
            "name": "Data DHI access",
            "id": "zZ711zXQxw8"
        },
        {
            "name": "Data MER access",
            "id": "c6hGi8GEZot"
        }
    ]
},{
    userType: UserType.MOH,
    userGroups: [
        {
            "name": "Data MOH access",
            "id": "OoiLAfMTyMx"
        },
        {
            "name": "OU Malawi MOH users",
            "id": "XtBPKkOmJUo"
        }
    ]
}]