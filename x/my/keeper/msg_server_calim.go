package keeper

import (
	"context"
	"fmt"

	"github.com/chen7gx/my/x/my/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCalim(goCtx context.Context, msg *types.MsgCreateCalim) (*types.MsgCreateCalimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var calim = types.Calim{
		Creator: msg.Creator,
		Proof:   msg.Proof,
	}

	id := k.AppendCalim(
		ctx,
		calim,
	)

	return &types.MsgCreateCalimResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCalim(goCtx context.Context, msg *types.MsgUpdateCalim) (*types.MsgUpdateCalimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var calim = types.Calim{
		Creator: msg.Creator,
		Id:      msg.Id,
		Proof:   msg.Proof,
	}

	// Checks that the element exists
	if !k.HasCalim(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCalimOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCalim(ctx, calim)

	return &types.MsgUpdateCalimResponse{}, nil
}

func (k msgServer) DeleteCalim(goCtx context.Context, msg *types.MsgDeleteCalim) (*types.MsgDeleteCalimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCalim(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCalimOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCalim(ctx, msg.Id)

	return &types.MsgDeleteCalimResponse{}, nil
}
