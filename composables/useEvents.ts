
export default function () {
    const { getItems } = useDirectusItems();

    const { data, pending, error, refresh } = useAsyncData(
        "events",
        async () => await getItems({ collection: "Events" })
    );

    return {
        pending,
        error,
        refresh,
        data,
    }
}  