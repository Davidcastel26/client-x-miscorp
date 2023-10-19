
const url = import.meta.env.VITE_API_CONNECTION || "http://localhost:8440";

export const RoleIdFetch = async () => {
    const data = await fetch(`${url}/xcompany/roles`)
    const roleDataAll = await data.json()

    return roleDataAll;
}

// export 