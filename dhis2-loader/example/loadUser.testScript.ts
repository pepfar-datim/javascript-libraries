import {loadUsers} from "../src/loadUsers";

const globalUser = {
    "lastUpdated": "2021-02-11T17:33:31.149",
    "id": "LAFGNeyxKHg",
    "created": "2017-02-08T20:31:49.931",
    "name": "Annie Schwartz",
    "displayName": "Annie Schwartz",
    "externalAccess": false,
    "surname": "Schwartz",
    "employer": "Peace Corps",
    "email": "aschwartz@peacecorps.gov",
    "lastCheckedInterpretations": "2021-02-11T17:33:31.149",
    "firstName": "Annie",
    "phoneNumber": "2025313555",
    "favorite": false,
    "access": {"read": true, "update": true, "externalize": true, "delete": true, "write": true, "manage": true},
    "userCredentials": {
        "id": "CzWMQXABdBG",
        "lastLogin": "2021-04-01T11:08:24.632",
        "disabled": false,
        "username": "globalUser",
        "userRoles": [{"name": "HQ Dashboard Viewer", "id": "saSooWeXauJ"}, {
            "name": "User Administrator",
            "id": "KagqnetfxMr"
        }, {"name": "Data Entry Tracker", "id": "NsYYVxduOTM"}, {"name": "Read Only", "id": "b2uHwX9YLhu"}],
        "cogsDimensionConstraints": [],
        "catDimensionConstraints": []
    },
    "favorites": [],
    "teiSearchOrganisationUnits": [],
    "translations": [],
    "organisationUnits": [{"name": "Global", "id": "ybg3MO3hcf4"}],
    "dataViewOrganisationUnits": [{"id": "ybg3MO3hcf4"}],
    "userGroupAccesses": [],
    "attributeValues": [],
    "userGroups": [{"name": "Global user administrators", "id": "ghYxzrKHldx"}, {
        "name": "Data SaSR entry",
        "id": "AZU9Haopetn"
    }, {"name": "Data MER access", "id": "c6hGi8GEZot"}, {
        "name": "Data ER access",
        "id": "M9Uer9SioL7"
    }, {"name": "Global users", "id": "gh9tn4QBbKZ"}, {
        "name": "Data SaSR access",
        "id": "CwFniyubXbx"
    }, {"name": "Data MOH access", "id": "OoiLAfMTyMx"}, {
        "name": "Data SIMS access",
        "id": "iuD8wUFz95X"
    }, {"name": "Data ESOP entry", "id": "U8hyQR40auy"}, {"name": "Data ESOP access", "id": "TRBfaInIiOK"}],
    "userAccesses": []
};

loadUsers([globalUser],'jakub.datim.org','Basic amZsYXNrYTpHcmVlbjE4IQ==')