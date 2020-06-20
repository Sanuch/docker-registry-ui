import React from "react";

export const StoreContext = React.createContext({
    addImage: (imageName: string) => {}
});