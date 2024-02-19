import { apiSlice } from "./apiSlice";



export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        adminLogin : builder.mutation({
            query:(data)=>({
                url : `/api/admin/auth`,
                method : 'POST',
                body : data
            })
        }),
        adminRegister : builder.mutation({
            query:(data)=>({
                url : `/api/admin/`,
                method : 'POST',
                body : data
            })
        }),
        adminLogout : builder.mutation({
            query : ()=>({
                url : `/api/admin/logout`,
                method : 'POST'
            })
        }),
        productAdd : builder.mutation({
            query : (data)=>({
                url : `/api/admin/add-product`,
                method : 'POST',
                body : data
            })
        }),
        getProduct : builder.mutation({
            query : ()=>({
                url : `/api/admin/getAll-products`,
                method : 'GET',
            })
        }),
        unlistProduct : builder.mutation({
            query : (productId)=>({
                url : `/api/admin/unlist-product/${productId}`,
                method : 'GET',
            })
        }),
        listProduct : builder.mutation({
            query : (productId)=>({
                url : `/api/admin/list-product/${productId}`,
                method : 'GET',
            })
        }),
        editProduct : builder.mutation({
            query : (data)=>({
                url : `/api/admin/edit-product`,
                method : 'PUT',
                body : data
            })
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `/api/admin/getAll-users`, // Adjust the URL according to your backend
                method: 'GET',
            }),
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/api/admin/delete-user/${userId}`, // Adjust the URL according to your backend
                method: 'DELETE',
            }),
        }),
        
    })
})

export const  {useAdminLoginMutation , useAdminLogoutMutation , useAdminRegisterMutation, useProductAddMutation , useGetProductMutation, useUnlistProductMutation, useListProductMutation, useEditProductMutation,useGetAllUsersQuery,useDeleteUserMutation} = adminApiSlice