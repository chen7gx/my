package keeper

import (
	"context"

	"github.com/chen7gx/my/x/my/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CalimAll(c context.Context, req *types.QueryAllCalimRequest) (*types.QueryAllCalimResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var calims []*types.Calim
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	calimStore := prefix.NewStore(store, types.KeyPrefix(types.CalimKey))

	pageRes, err := query.Paginate(calimStore, req.Pagination, func(key []byte, value []byte) error {
		var calim types.Calim
		if err := k.cdc.UnmarshalBinaryBare(value, &calim); err != nil {
			return err
		}

		calims = append(calims, &calim)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCalimResponse{Calim: calims, Pagination: pageRes}, nil
}

func (k Keeper) Calim(c context.Context, req *types.QueryGetCalimRequest) (*types.QueryGetCalimResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var calim types.Calim
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCalim(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCalimIDBytes(req.Id)), &calim)

	return &types.QueryGetCalimResponse{Calim: &calim}, nil
}
