import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL 

// CREATION
export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const newKit = {
        model_id: formData.get("model_id"),
        name: formData.get("name"),
        series: formData.get("series"),
        price_us: formData.get("price_us"),
        price_jp: formData.get("price_jp"),
        release_date: formData.get("release_date"),
        box_art: formData.get("box_art"),
        grade: formData.get("grade"),
        scale: formData.get("scale"),
    }

    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newKit)
    })
    return redirect("/")
}

// UPDATE
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData()
    const id = params.id
    const updatedKit = {
        model_id: formData.get("model_id"),
        name: formData.get("name"),
        series: formData.get("series"),
        price_us: formData.get("price_us"),
        price_jp: formData.get("price_jp"),
        release_date: formData.get("release_date"),
        box_art: formData.get("box_art"),
        grade: formData.get("grade"),
        scale: formData.get("scale"),
    }
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedKit)
    })
    return redirect(`/kits/${id}`)
}

// DELETION
export const deleteAction = async ({ params }) => {
    const id = params.id
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    return redirect("/")
}