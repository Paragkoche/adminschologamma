"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { changMode } from "@/redux/reducer/UI.reducer";
import { Button, Typography } from "@mui/material"
const Page = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.UIReducer.value.mode)
    return (
        <Button onClick={() => dispatch(changMode(mode == "light" ? "dark" : "light"))}>
            Enter
        </Button>
    );
}

export default Page;