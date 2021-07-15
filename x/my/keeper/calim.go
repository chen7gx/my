package keeper

import (
	"encoding/binary"
	"github.com/chen7gx/my/x/my/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetCalimCount get the total number of calim
func (k Keeper) GetCalimCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimCountKey))
	byteKey := types.KeyPrefix(types.CalimCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetCalimCount set the total number of calim
func (k Keeper) SetCalimCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimCountKey))
	byteKey := types.KeyPrefix(types.CalimCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCalim appends a calim in the store with a new id and update the count
func (k Keeper) AppendCalim(
	ctx sdk.Context,
	calim types.Calim,
) uint64 {
	// Create the calim
	count := k.GetCalimCount(ctx)

	// Set the ID of the appended value
	calim.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&calim)
	store.Set(GetCalimIDBytes(calim.Id), appendedValue)

	// Update calim count
	k.SetCalimCount(ctx, count+1)

	return count
}

// SetCalim set a specific calim in the store
func (k Keeper) SetCalim(ctx sdk.Context, calim types.Calim) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	b := k.cdc.MustMarshalBinaryBare(&calim)
	store.Set(GetCalimIDBytes(calim.Id), b)
}

// GetCalim returns a calim from its id
func (k Keeper) GetCalim(ctx sdk.Context, id uint64) types.Calim {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	var calim types.Calim
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCalimIDBytes(id)), &calim)
	return calim
}

// HasCalim checks if the calim exists in the store
func (k Keeper) HasCalim(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	return store.Has(GetCalimIDBytes(id))
}

// GetCalimOwner returns the creator of the calim
func (k Keeper) GetCalimOwner(ctx sdk.Context, id uint64) string {
	return k.GetCalim(ctx, id).Creator
}

// RemoveCalim removes a calim from the store
func (k Keeper) RemoveCalim(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	store.Delete(GetCalimIDBytes(id))
}

// GetAllCalim returns all calim
func (k Keeper) GetAllCalim(ctx sdk.Context) (list []types.Calim) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalimKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Calim
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCalimIDBytes returns the byte representation of the ID
func GetCalimIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCalimIDFromBytes returns ID in uint64 format from a byte array
func GetCalimIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
