package keeper

import (
	"testing"

	"github.com/chen7gx/my/x/my/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNCalim(keeper *Keeper, ctx sdk.Context, n int) []types.Calim {
	items := make([]types.Calim, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendCalim(ctx, items[i])
	}
	return items
}

func TestCalimGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCalim(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetCalim(ctx, item.Id))
	}
}

func TestCalimExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCalim(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasCalim(ctx, item.Id))
	}
}

func TestCalimRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCalim(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCalim(ctx, item.Id)
		assert.False(t, keeper.HasCalim(ctx, item.Id))
	}
}

func TestCalimGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCalim(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCalim(ctx))
}

func TestCalimCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCalim(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetCalimCount(ctx))
}
