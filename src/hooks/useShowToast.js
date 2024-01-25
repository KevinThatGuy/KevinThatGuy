import { Toast, useToast } from '@chakra-ui/react'
import React, { useCallback } from 'react'

const useShowToast = () => {
    const toast = useToast()
    const showToast = useCallback((title,description,status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 9000,
            isClosable: true,
        })
    }, [toast])
    return showToast
}
///Need fixing the toast do not show up
export default useShowToast